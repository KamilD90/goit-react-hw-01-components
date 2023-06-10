import { data } from './data.json';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
