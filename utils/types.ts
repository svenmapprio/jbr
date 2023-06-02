import { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types";
import { GetAttributesValues } from "@strapi/strapi";

export type WorkImage = Omit<GetAttributesValues<'api::work-image.work-image'>, 'image'> & {
    image: {data: Strapi4ResponseMany<GetAttributesValues<'api::work-image.work-image'>['image']>['data']}
};

export type Work = Omit<GetAttributesValues<'api::work.work'>, 'work_images'> & {
    work_images: {data: Strapi4ResponseMany<WorkImage>['data']}
};