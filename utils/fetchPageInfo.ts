import { PageInfo } from "../typing";

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo[] = data.pageInfo;

    console.log('fetching', pageInfo);

    return pageInfo;
}