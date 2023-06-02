import { Work } from "~/utils/types";

export const useWorks = async (type: Work['type']) => {
    const {find} = useStrapi<Work>();

    const findData = await find('works', {filters: {
        type: {
            $eq: type
        }
    }, populate: ['work_images', 'work_images.image']});

    return findData;
}