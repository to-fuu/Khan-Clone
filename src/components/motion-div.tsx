'use client'
import { motion, TargetAndTransition, Transition, VariantLabels } from 'framer-motion';

import { ReactNode } from "react";

export default function MotionDiv({ children, initial, exit, animate, transition, className, as }: {
    children?: ReactNode,
    initial?: boolean | TargetAndTransition | VariantLabels,
    exit?: TargetAndTransition | VariantLabels,
    animate?: boolean | TargetAndTransition | VariantLabels,
    transition?: Transition,
    className?: string,
    as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li' | 'span'
}) {

    const Component = motion[as || 'div'];

    return <Component initial={initial} exit={exit} animate={animate} transition={transition} className={className}>
        {children}
    </Component>
}