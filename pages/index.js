import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    <h1>What Can You Deploy to Static Apps?</h1>
    <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return <SmallCard key={project.id} Icon={Icon} title={project.name} slug={project.slug} />;
      })}
    </div>
    <h3 className="myname">By Masoud 🤖</h3>
  </div>
);

export default Home;
