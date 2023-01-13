import { groq } from 'next-sanity';
import { sanityClient } from "../../sanity";

const query = groq `
  *[_type == "projects"] {
    ...,
    technologies[]->
  }
`

export default async function handler(req, res) {
  const data = await sanityClient.fetch(query);
  res.status(200).json(data);
}
