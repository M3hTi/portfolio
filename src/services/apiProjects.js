import supabase from "../services/supabaseClient";

export async function getProjects(filterBy = "") {
  try {
    let query = supabase.from("projects").select("*");

    if (filterBy && filterBy !== "all") {
      query = query.contains("frame_works", [filterBy]);
    }

    let { data: projects, error } = await query;
    if (error) {
      throw new Error(`couldn't fetch projects. Error: ${error.message}`);
    }

    return projects;
  } catch (error) {
    console.log(error);
  }
}
