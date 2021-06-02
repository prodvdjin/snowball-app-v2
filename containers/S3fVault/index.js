import { memo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import VaultHeader from 'parts/Vault/VaultHeader'
import VaultTabs from 'parts/Vault/VaultTabs'
import SwapForm from './SwapForm'
import LiquidityForm from './LiquidityForm'
import TransactionsCard from './TransactionsCard'
import MyShare from './MyShare'
import { VAULT_S3F_IMAGE_PATH } from 'utils/constants/image-paths'
import { VAULT_TABS } from 'utils/constants/vault-tabs'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: -theme.spacing(4),
  },
  header: {
    background: `linear-gradient(90deg, ${theme.custom.palette.green} 0%, ${theme.custom.palette.darkGreen} 100%)`,
    marginBottom: theme.spacing(3)
  },
}));

const S3fVault = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(VAULT_TABS.swap.VALUE)

  return (
    <main className={classes.root}>
      <VaultHeader
        title='s3F Vault'
        subHeader1='USDT + BUSD + DAI'
        subHeader2='Staking APR: 36.09%'
        icon={VAULT_S3F_IMAGE_PATH}
        className={classes.header}
      />
      <VaultTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === VAULT_TABS.swap.VALUE && <SwapForm />}
      {selectedTab === VAULT_TABS.liquidity.VALUE && <LiquidityForm />}
      {selectedTab === VAULT_TABS.transactions.VALUE && <TransactionsCard />}
      {selectedTab === VAULT_TABS.share.VALUE && <MyShare />}
    </main>
  )
}

export default memo(S3fVault)