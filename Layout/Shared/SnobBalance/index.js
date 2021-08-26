import { memo, useMemo } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useContracts } from 'contexts/contract-context'
import { usePrices } from 'contexts/price-context'
import DollarIcon from 'components/Icons/DollarIcon'

const useStyles = makeStyles((theme) => ({
  balanceContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  balance: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
    '& small': {
      fontWeight: 'normal',
    },
  }
}))

const SnobBalance = () => {
  const classes = useStyles()
  const { snowballBalance } = useContracts()
  const { prices } = usePrices();

  const snowballPrice = useMemo(() => prices.SNOB * snowballBalance, [prices, snowballBalance]);

  return (
    <div className={classes.balanceContainer}>
      <DollarIcon />
      <Typography variant="body2" className={classes.balance}>
        {snowballBalance.toLocaleString()} SNOB
        <small>(${snowballPrice.toFixed(3)})</small>
      </Typography>
    </div>
  )
}

export default memo(SnobBalance)