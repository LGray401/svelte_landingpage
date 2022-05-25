import { client } from "$lib/components/contentfulClient";

export async function get() {
    // get all blogs from Contentful
    const textBlocks = await client.getEntries({
        content_type: 'textBlock'
    });

    if (textBlocks) {
        return {
            status: 200,
            body: {
                textBlocks
            }
        };
    }

    return {
        status: 404
    };
}

