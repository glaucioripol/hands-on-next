import { retrieveProfileData } from "../src/services/detailsMyUser"

export { Home as default } from "../src/screens"

export async function getStaticProps() {
  const props = await retrieveProfileData()
  
  return {
    props,
  }
}
