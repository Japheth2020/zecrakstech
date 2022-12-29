

import { createClient } from "next-sanity";

const client = createClient({
    projectId: 'ys08qtoo',
    dataset: 'production',
    token: '', // or leave blank for unauthenticated usage
    useCdn: false ,
    apiVersion: "2021-03-25"
})


export default client