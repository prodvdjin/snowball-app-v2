import { memo } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SnowTokenIcon from 'components/SnowTokenIcon';
import CustomPopover from 'components/CustomPopover';
import Tags from 'components/Tags';
import SnowPairsIcon from 'components/SnowPairsIcon';
import Info from '../Info';
import { BOOST_INFO_IMAGE_PATH } from 'utils/constants/image-paths';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
  },
  popover: {
    backgroundColor: theme.custom.palette.lightBlue,
    '&::before': {
      backgroundColor: theme.custom.palette.lightBlue,
    },
  },
}));

const DetailItem = ({ item }) => {
  const classes = useStyles();
  const pairsIcon = item?.name.split('/');

  return (
    <div className={classes.card}>
      <div>
        <SnowPairsIcon pairsIcon={pairsIcon} />
      </div>

      <div>
        <Typography variant="subtitle2">{item.name}</Typography>
        <Tags type="secondary">
          <SnowTokenIcon size={12} token="png" />
          {item.source}
        </Tags>
      </div>

      <div>
        <Typography variant="body2">
          APY <CustomPopover />
        </Typography>
        <Typography variant="subtitle1">
          {item.gaugeInfo.fullYearlyAPY?.toFixed(2)}%
        </Typography>
      </div>

      <div>
        <Typography variant="body2">
          TVL <CustomPopover />
        </Typography>
        <Typography variant="subtitle1">${item.tvlStaked}</Typography>
      </div>

      <div>
        <Typography variant="body2">
          Boost{' '}
          <CustomPopover contentClassName={classes.popover}>
            <Info icon={BOOST_INFO_IMAGE_PATH} buttonText="More info" />
          </CustomPopover>
        </Typography>
        <Tags type="primary">2.5x</Tags>
      </div>
    </div>
  );
};

export default memo(DetailItem);
