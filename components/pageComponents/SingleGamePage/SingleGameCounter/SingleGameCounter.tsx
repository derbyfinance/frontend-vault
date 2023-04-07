import React, { useEffect, useState } from 'react';
import { useCountdown } from '@components/pageComponents/GamePageComponent/Counter/useCount';
import { formatter } from '@helpers/helperFunctions';
import LogoIcon from '@icons/LogoIcon.svg';
import groupIcon from '@icons/groupIcon.svg';
import lockedIcon from '@icons/lockedIcon.svg';
import Image from 'next/image';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  CounterWrapper,
  StyleCountdownCircle,
  StyleInfo,
  StyleInfoItem,
  StyleInfoItemText,
  StyleInfoItemTextDesc,
  StyleInfoItems,
  StyleTimer,
  StyleTimerText,
} from './SingleGameCounter.styled';

const SinglePageCounter = ({ nextRace, raceHeader }) => {
  const secondsInWeek = 604800;
  const [hours, setHours] = useState<any>(0);

  const time = useCountdown(
    nextRace !== undefined
      ? new Date(nextRace)
      : new Date(new Date().getTime() + 10000),
  );

  useEffect(() => {
    setHours(Number(time.hours) + 24 * Number(time.days));
  }, [time.days, time.hours]);

  return (
    <CounterWrapper>
      <StyleCountdownCircle>
        <CountdownCircleTimer
          isPlaying
          duration={secondsInWeek}
          initialRemainingTime={time.secondsOverall}
          colors={['#fff', '#fff']}
          colorsTime={[7, 0]}
          size={148}
          strokeWidth={15}
          trailColor="#689ED9"
          onComplete={() => {
            return { shouldRepeat: true, delay: 0 };
          }}
        >
          {() => <Image src={LogoIcon} alt={'logo'} />}
        </CountdownCircleTimer>
        <StyleTimer>
          <StyleTimerText>Next Race in</StyleTimerText>
          <div>
            {hours}h / {time.minutes}m /{time.seconds}s
          </div>
        </StyleTimer>
      </StyleCountdownCircle>
      <StyleInfo>
        <StyleInfoItems>
          <InfoItem
            price={`$ ${formatter.format(raceHeader?.tvl)}`}
            text={'Total value locked'}
            iconPath={lockedIcon}
          />
          <InfoItem
            price={raceHeader?.members}
            text={'MEMBERS'}
            iconPath={groupIcon}
          />
        </StyleInfoItems>
      </StyleInfo>
    </CounterWrapper>
  );
};

export default SinglePageCounter;

const InfoItem = ({ price, text, iconPath }) => {
  return (
    <StyleInfoItem>
      <Image src={iconPath} alt={'coin'} />
      <StyleInfoItemText>
        <div>{price}</div>
        <StyleInfoItemTextDesc>{text}</StyleInfoItemTextDesc>
      </StyleInfoItemText>
    </StyleInfoItem>
  );
};
