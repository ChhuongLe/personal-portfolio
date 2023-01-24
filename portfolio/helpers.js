export const fetchExperience = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
  const experience = await res.json();
  return experience;

}

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
  const projects = await res.json();
  return projects;

}

export const fetchSkills= async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const skills = await res.json();
  return skills;
}

export const fetchSocials= async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const socials = await res.json();
  return socials;
}

