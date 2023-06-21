import { forwardRef } from 'react';
import { buttonLoading, buttonNoGapContent, buttonWithGapContent, containedButton, containedSimpleLoadingSpinner, outlinedButton, simpleLoadingSpinner, textButton } from './button.css';
import { buttonText } from '../typography/typography.css';

type ButtonVariants = 'contained' | 'outlined' | 'text'

type ButtonContentProps = {
    readonly hasGap: boolean
}



type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly variant: ButtonVariants
    readonly icon?: string
    readonly loading?: boolean
    readonly selected?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, icon, loading, children, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <button className={variant === 'contained' ? containedButton : variant === 'outlined' ? outlinedButton : textButton} ref={ref} {...props}>
        {

            loading &&
            <div className={buttonLoading}>
                <div className={variant === 'contained' ? containedSimpleLoadingSpinner : simpleLoadingSpinner} />
            </div>
        }
        <div className={!!icon && !!children ? buttonWithGapContent : buttonNoGapContent} style={{ opacity: loading ? 0 : 100 }} >
            <i className={icon} />
            <span className={buttonText}>
                {children}
            </span>
        </div>
    </button>
));


type ButtonVariantProps = Omit<ButtonProps, 'variant'>

export const ContainedButton = (props: ButtonVariantProps) => (
    <Button variant='contained' {...props} />
);

export const OutlinedButton = (props: ButtonVariantProps) => (
    <Button variant='outlined' {...props} />
);

export const TextButton = (props: ButtonVariantProps) => (
    <Button variant='text'{...props} />
);