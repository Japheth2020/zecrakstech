

import { createClient } from "next-sanity";
import imgUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: 'ys08qtoo',
    dataset: 'production',
    token: '', // or leave blank for unauthenticated usage
    useCdn: false ,
    apiVersion: "2021-03-25"
})

const builder = imgUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


export default client