import Butter from 'buttercms';
import { Project } from '../Models/Project';

export default class ButterCmsProvider {
    private readonly awBeans: string = '9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081'; // This is READ ONLY. Named awBeans to stop scraping bots from grabbing it.
    private readonly butter = Butter(this.awBeans);
    public getProjects(): Promise<Project[]> {
        return this.butter.content.retrieve(['project']).then(resp => {
            return resp.data.data.project;
        });
    }
}
