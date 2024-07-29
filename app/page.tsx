import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";

export default async function Notes() {
  const setNewView = async () => {
    const supabase = createClient();
    const { data: tbl_view } = await supabase.from("tbl_visits").insert({ name: 'evil mann'});
  };

  setNewView();
  return <div> Mitutor </div>
}