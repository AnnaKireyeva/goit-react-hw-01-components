// const data = [
//   { id: 'id-1', label: '.docx', percentage: 22 },
//   { id: 'id-2', label: '.pdf', percentage: 4 },
//   { id: 'id-3', label: '.mp3', percentage: 17 },
//   { id: 'id-4', label: '.psd', percentage: 47 },
//   { id: 'id-5', label: '.pdf', percentage: 10 },
// ];
// import data from '../../data/data.json';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li className={styles.item} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']),
      percentage: PropTypes.number,
    }),
  ),
};
