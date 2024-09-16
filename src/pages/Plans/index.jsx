import React from 'react'
import PlansContainer from './container/PlansContainer'
import Layout from '@/src/components/Layout'
import { PlansProvider } from '@/src/context-api/context/plans-module'

const Plans = () => {
    return (
        <Layout phase="plans">
            <PlansContainer />
        </Layout>
    )
}

export default Plans