import PropTypes from 'prop-types';
import { Title, StatList, Item, StatsLabel, StatsPercentage } from './statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
  <Title >{title}</Title>

  <StatList>
    {stats.map(stat => (
      <Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
      <StatsLabel>{stat.label}</StatsLabel>
      <StatsPercentage>{stat.percentage}</StatsPercentage>
    </Item>  
    ))} 
  </StatList>
</section>
    )
}

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

Statistics.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
