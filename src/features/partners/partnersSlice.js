import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectFeaturedPartners = () => {
    return PARTNERS.find((partners) => partners.featured);
};

export const selectAllPartners = () => {
    return PARTNERS;
};