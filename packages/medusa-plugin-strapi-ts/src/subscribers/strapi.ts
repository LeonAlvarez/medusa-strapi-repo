import {
	BaseEntity,
	EventBusService,
	ProductCategoryService,
	ProductCollectionService,
	ProductService,
	ProductVariantService,
	RegionService,
} from '@medusajs/medusa';
import { Logger } from '@medusajs/medusa/dist/types/global';

import { AuthInterface } from '../types/globals';
import UpdateStrapiService from '../services/update-strapi';

class StrapiSubscriber {
	productVariantService_: ProductVariantService;
	productService_: ProductService;
	strapiService_: UpdateStrapiService;
	eventBus_: EventBusService;
	loggedInUserAuth: AuthInterface;
	logger: Logger;

	constructor({ updateStrapiService, productVariantService, productService, eventBusService, logger }) {
		this.productVariantService_ = productVariantService;
		this.productService_ = productService;
		this.strapiService_ = updateStrapiService;
		this.eventBus_ = eventBusService;
		this.logger = logger;
		this.logger.info('Strapi Subscriber Initialized');

		this.eventBus_.subscribe(RegionService.Events.CREATED, async (data: BaseEntity) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.createRegionInStrapi(data.id, authInterace);
		});

		this.eventBus_.subscribe(RegionService.Events.UPDATED, async (data: BaseEntity) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.updateRegionInStrapi(data.id, authInterace);
		});

		this.eventBus_.subscribe(ProductVariantService.Events.CREATED, async (data: BaseEntity) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.createProductVariantInStrapi(data.id, authInterace);
		});

		this.eventBus_.subscribe(ProductVariantService.Events.UPDATED, async (data) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.updateProductVariantInStrapi(data, authInterace);
		});

		this.eventBus_.subscribe(ProductService.Events.UPDATED, async (data) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.updateProductInStrapi(data);
		});

		this.eventBus_.subscribe(ProductService.Events.CREATED, async (data: BaseEntity) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.createProductInStrapi(data.id, authInterace);
		});

		this.eventBus_.subscribe(
			'product.metafields.create',
			async (data: BaseEntity & { data: Record<string, unknown> }) => {
				const authInterace: AuthInterface =
					(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
				await this.strapiService_.createProductMetafieldInStrapi(data, authInterace);
			}
		);

		this.eventBus_.subscribe(
			'product.metafields.update',
			async (data: BaseEntity & { data: Record<string, unknown> }) => {
				const authInterace: AuthInterface =
					(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
				await this.strapiService_.updateProductMetafieldInStrapi(data, authInterace);
			}
		);

		this.eventBus_.subscribe(
			ProductCollectionService.Events.UPDATED,
			async (data: BaseEntity & { data: Record<string, unknown> }) => {
				const authInterace: AuthInterface =
					(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
				await this.strapiService_.updateCollectionInStrapi(data, authInterace);
			}
		);

		this.eventBus_.subscribe(
			ProductCollectionService.Events.CREATED,
			async (data: BaseEntity & { data: Record<string, unknown> }) => {
				const authInterace: AuthInterface =
					(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
				await this.strapiService_.createCollectionInStrapi(data.id, authInterace);
			}
		);

		this.eventBus_.subscribe(
			ProductCategoryService.Events.UPDATED,
			async (data: BaseEntity & { data: Record<string, unknown> }) => {
				const authInterace: AuthInterface =
					(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
				await this.strapiService_.updateCategoryInStrapi(data, authInterace);
			}
		);

		this.eventBus_.subscribe(
			ProductCategoryService.Events.CREATED,
			async (data: BaseEntity & { data: Record<string, unknown> }) => {
				const authInterace: AuthInterface =
					(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
				await this.strapiService_.createCategoryInStrapi(data.id, authInterace);
			}
		);

		this.eventBus_.subscribe(ProductService.Events.DELETED, async (data) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.deleteProductInStrapi(data, authInterace);
		});

		this.eventBus_.subscribe(ProductVariantService.Events.DELETED, async (data) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.deleteProductVariantInStrapi(data, authInterace);
		});

		// Blocker - Delete Region API
		this.eventBus_.subscribe(RegionService.Events.DELETED, async (data) => {
			const authInterace: AuthInterface =
				(await this.getLoggedInUserStrapiCreds()) ?? this.strapiService_.defaultAuthInterface;
			await this.strapiService_.deleteRegionInStrapi(data, authInterace);
		});
	}
	async getLoggedInUserStrapiCreds(): Promise<AuthInterface> {
		return this.loggedInUserAuth;
	}

	setLoggedInUserCreds(email, password): void {
		this.loggedInUserAuth = {
			email,
			password,
		};
	}
}

export default StrapiSubscriber;
