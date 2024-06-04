import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './motif.css';

export const Motif = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}motif-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.motif, className)}
      width="40"
      height="40"
      viewBox="0 0 64 64"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <g id="lego">
                    <g>
                        <path d="M0,0.9C0,0.405,0.405,0,0.9,0h24.113c0.495,0,0.9,0.405,0.9,0.9v36.287c0,0.495-0.286,1.186-0.636,1.536l-24.64,24.64
                            C0.286,63.714,0,63.595,0,63.1L0,0.9z"/>
                        <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M0,0.9C0,0.405,0.405,0,0.9,0h24.113c0.495,0,0.9,0.405,0.9,0.9
                            v36.287c0,0.495-0.286,1.186-0.636,1.536l-24.64,24.64C0.286,63.714,0,63.595,0,63.1L0,0.9z"/>
                    </g>
                    <g>
                        <path d="M63.1,64c0.495,0,0.9-0.405,0.9-0.9V38.988c0-0.495-0.405-0.9-0.9-0.9H26.812c-0.495,0-1.186,0.286-1.536,0.636
                            l-24.64,24.64C0.286,63.714,0.405,64,0.9,64H63.1z"/>
                        <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M63.1,64c0.495,0,0.9-0.405,0.9-0.9V38.988
                            c0-0.495-0.405-0.9-0.9-0.9H26.812c-0.495,0-1.186,0.286-1.536,0.636l-24.64,24.64C0.286,63.714,0.405,64,0.9,64H63.1z"/>
                    </g>
                </g>
                <g id="aa">
                    <g>
                        <g>
                            <g>
                                <path d="M39.953,0.874c-0.119-0.481-0.31-0.48-0.426,0.001l-7.278,30.213c-0.116,0.481,0.076,0.589,0.426,0.239l11.227-11.227
                                    c0.35-0.35,0.539-1.03,0.421-1.51L39.953,0.874z"/>
                                <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M39.953,0.874c-0.119-0.481-0.31-0.48-0.426,0.001l-7.278,30.213
                                    c-0.116,0.481,0.076,0.589,0.426,0.239l11.227-11.227c0.35-0.35,0.539-1.03,0.421-1.51L39.953,0.874z"/>
                            </g>
                            <g>
                                <path d="M45.411,19.678c-0.481-0.119-1.16,0.071-1.51,0.421L32.674,31.326c-0.35,0.35-0.243,0.542,0.239,0.426l30.213-7.278
                                    c0.481-0.116,0.482-0.308,0.001-0.426L45.411,19.678z"/>
                                <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M45.411,19.678c-0.481-0.119-1.16,0.071-1.51,0.421L32.674,31.326
                                    c-0.35,0.35-0.243,0.542,0.239,0.426l30.213-7.278c0.481-0.116,0.482-0.308,0.001-0.426L45.411,19.678z"/>
                            </g>
                        </g>
                    </g>
                </g>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
