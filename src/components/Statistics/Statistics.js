import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  const color = 'rgb(' + r + ', ' + g + ',' + b + ')';
  return color;
}

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
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
