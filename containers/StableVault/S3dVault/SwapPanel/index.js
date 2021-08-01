import { memo } from 'react'
import { Grid } from '@material-ui/core'

import { useS3dVaultContracts } from 'contexts/s3d-vault-context'
import PanelLayout, { usePanelStyles } from 'containers/StableVault/Shared/PanelLayout'
import SwapForm from 'containers/StableVault/Shared/SwapForm'
import TransactionsHistory from 'containers/StableVault/Shared/TransactionsHistory'

const SwapPanel = ({
  vault
}) => {
  const classes = usePanelStyles();
  const {
    tokenArray,
    tokenValues,
    transactions,
    getToSwapAmount,
    onSwap
  } = useS3dVaultContracts()

  return (
    <PanelLayout>
      <Grid item sm={12} md={6} className={classes.leftCard}>
        <SwapForm
          vault={vault}
          tokenArray={tokenArray}
          tokenValues={tokenValues}
          getToSwapAmount={getToSwapAmount}
          onSwap={onSwap}
        />
      </Grid>
      <Grid item sm={12} md={6} className={classes.rightCard}>
        <TransactionsHistory
          vault={vault}
          transactions={transactions}
        />
      </Grid>
    </PanelLayout>
  )
}

export default memo(SwapPanel)