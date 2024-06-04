import { Motif } from '~/components/motif';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Motif',
};

export const Default = () => (
  <StoryContainer>
    <Motif highlight />
  </StoryContainer>
);
