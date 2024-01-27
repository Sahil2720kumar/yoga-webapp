import { request, gql } from "graphql-request";

export const GET_ALL_POSE_CATEGORIES_FEATURED = gql`
    query MyQuery($first: Int!) {
        posesCategories(first: $first) {
            categoryName
            categorySlug
            id
            image {
                url
            }
            metaDescription
        }
    }
`;

export const GET_ALL_POSE_CATEGORIES = gql`
    query MyQuery {
        posesCategories() {
            categoryName
            categorySlug
            id
            image {
                url
            }
            metaDescription
        }
    }
`;

export const GET_PARTICULAR_CATEGORY_POSES = gql`
    query MyQuery($slug: String!) {
        posesCategory(where: { categorySlug: $slug }) {
            categoryName
            categorySlug
            poses {
                id
                poseDescription
                poseImage {
                    url
                }
                poseLevel
                poseName
                poseSlug
                posesCategories {
                    categoryName
                }
            }
            metaDescription
        }
    }
`;

export const GET_ALL_POSES_FEATURED = gql`
    query MyQuery($first: Int!) {
        poses(first: $first) {
            id
            poseDescription
            poseImage {
                url
            }
            poseLevel
            poseName
            poseSlug
            posesCategories {
                categoryName
                categorySlug
            }
        }
    }
`;

export const GET_ALL_POSES = gql`
    query MyQuery {
        poses() {
            id
            poseDescription
            poseImage {
                url
            }
            poseLevel
            poseName
            poseSlug
            posesCategories {
                categoryName
            }
        }
    }
`;

export const GET_PARTICULAR_POSE = gql`
    query MyQuery($slug: String!) {
        pose(where: { poseSlug: $slug }) {
            id
            poseSlug
            poseImage {
                url
            }
            poseDescription
            poseContent {
                html
            }
            poseSteps {
                html
            }
            sanskritName
            poseName
            poseLevel
        }
    }
`;

export const GET_SEARCH_POSES = gql`
    query MyQuery($search:String!) {
        poses(
            where: {OR: { _search: $search}}
        ) {
        id
            poseSlug
            poseName
            sanskritName
            poseImage {
                url
            }
            poseDescription
            posesCategories {
                categoryName
            }
        }
    }
`;


export const GET_ALL_POSES_SLUG = gql`
    query MyQuery {
        poses() {
            id
            poseSlug
        }
    }
`;


export const GET_ALL_CATEGORIES = gql`
    query MyQuery {
        posesCategories() {
            categorySlug
        }
    }
`;