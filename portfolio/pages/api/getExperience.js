import { groq } from 'next-sanity';
import { sanityClient } from "../../sanity";

const query = groq `
  *[_type == "experience"] {
    title,
    companyImage,
    dateStarted,
    dateEnded,
    points,
    isCurrentlyWorkingHere,
    technologies
  }
`

export default async function handler(req, res) {
  const exp = await sanityClient.fetch(query);
  res.status(200).json(exp);
}
