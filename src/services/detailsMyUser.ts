import { IGithubModel } from '../interfaces'

export async function retrieveProfileData() {
  return fetch(process.env.PROFILE_ON_GITHUB)
    .then<IGithubModel>((response) => response.json())
    .then((data) => data)
}
