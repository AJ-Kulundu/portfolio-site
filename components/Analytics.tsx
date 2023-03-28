'use client'

import {Analytics as VercelAnalytics} from '@vercel/analytics/react';
import type {ComponentProps} from 'react';

type AnalyticsProps = ComponentProps<typeof VercelAnalytics>;

export default function Analytics(props: AnalyticsProps) {
    return (
        <VercelAnalytics
        {...props}
        />
    )
}