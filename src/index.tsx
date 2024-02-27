import * as React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
  progress: number
  width?: string
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: (props: Props) => props.width || '100%',
    height: '8px',
    gap: '12px'
  },
  bar: {
    backgroundColor: '#925FF0',
    height: '8px',
    width: (props: Props) => props.width || '290px',
    borderRadius: '10px',
    margin: '0 10px',
    '& .MuiLinearProgress-root': {
      backgroundColor: '#ECEFF1',
      height: '8px',
      width: '100%',
      borderRadius: '8px',
      margin: '0'
    },
    '& .MuiLinearProgress-colorPrimary': {
      backgroundColor: '#ECEFF1',
      borderRadius: '8px',
      height: '8px'
    },
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: '#02599E',
      borderRadius: '8px',
      height: '8px'
    }
  },
  percentage: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#000',
    fontFamily: 'Gotham',
    lineHeight: '20px',
    '& .MuiTypography-body1': {
      fontSize: '12px',
      fontWeight: 500,
      color: '#000',
      fontFamily: 'Gotham',
      lineHeight: '20px'
    }
  }
}))

export const ProgressBar: React.FC<Props> = (props) => {
  const { progress, width } = props
  const classes = useStyles({
    width,
    progress: 0
  })

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <LinearProgress variant='determinate' value={progress} />
      </div>
      <div className={classes.percentage}>
        <Typography>{`${Math.round(progress)}%`}</Typography>
      </div>
    </div>
  )
}
