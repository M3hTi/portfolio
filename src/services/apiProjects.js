import supabase from "../services/supabaseClient";

export async function getProjects() {
  try {
    let { data: projects, error } = await supabase.from("projects").select("*");
    if (error) {
      throw new Error(`couldn't fetch projects. Error: ${error.message}`);
    }

    return projects;
  } catch (error) {
    console.log(error);
  }
}
