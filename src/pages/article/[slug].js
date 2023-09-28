import { useRouter } from "next/router";
import Data from '../../app/components/data';
import styles from '../../app/page.module.css';

export default function Article() {
    const router = useRouter();
    const slug = router.query.slug;

    const articleData = Data.find((val) => val.id ===slug);

    if (!articleData) return null;

    return (
        <main>
            <h1>Article</h1>
            <p>{articleData.title}</p>
            <p>{articleData.blurb}</p>
        </main>
    );
}