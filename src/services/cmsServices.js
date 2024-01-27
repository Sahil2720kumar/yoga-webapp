import { cache } from "react";
import {
    GET_ALL_POSE_CATEGORIES,
    GET_ALL_POSE_CATEGORIES_FEATURED,
    GET_ALL_POSES_FEATURED,GET_ALL_CATEGORIES,
    GET_ALL_POSES,GET_SEARCH_POSES,GET_ALL_POSES_SLUG,
    GET_PARTICULAR_CATEGORY_POSES,GET_PARTICULAR_POSE
} from "@/lib/cmsQueries";
import { request, gql } from "graphql-request";

const cmsAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API_ENDPOINT;

export const getAllPosesCategoriesFeatured = cache(async first => {
    const variables = {
        first
    };
    const result = await request(
        cmsAPI,
        GET_ALL_POSE_CATEGORIES_FEATURED,
        variables
    );
    return result?.posesCategories;
});

export const getAllPosesFeatured = cache(async first => {
    const variables = {
        first
    };
    const result = await request(cmsAPI, GET_ALL_POSES_FEATURED, variables);
    return result?.poses;
});

export const getAllPoses = cache(async () => {
    const result = await request(cmsAPI, GET_ALL_POSES);
    return result?.poses;
});

export const getAllPosesCategories = cache(async () => {
    const result = await request(cmsAPI, GET_ALL_POSE_CATEGORIES);
    return result?.posesCategories;
});

export const getParticularCategoryPoses = cache(async slug => {
    const variables = {
        slug
    };
    const result = await request(
        cmsAPI,
        GET_PARTICULAR_CATEGORY_POSES,
        variables
    );
    return result?.posesCategory;
});

export const getParticularPose = cache(async slug => {
    const variables = {
        slug
    };
    const result = await request(
        cmsAPI,
        GET_PARTICULAR_POSE,
        variables
    );
    return result?.pose;
});

export const getSearchPoses = cache(async search => {
    const variables = {
        search:search
    };
    const result = await request(
        cmsAPI,
        GET_SEARCH_POSES,
        variables
    );
    return result?.poses;
});


export const getAllPosesSlug = cache(async () => {
    const result = await request(cmsAPI, GET_ALL_POSES_SLUG);
    return result?.poses;
});

export const getAllCategoriesSlug = cache(async () => {
    const result = await request(cmsAPI, GET_ALL_CATEGORIES);
    return result?.posesCategories;
});

