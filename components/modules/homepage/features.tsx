import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gem, ListOrdered, Trophy, PlusCircle, Users, Globe, Heart } from 'lucide-react';

import { Button } from '@fucina/ui';
import { GithubIcon } from '@/components/social-icons';
import EmptyRaw from '@/components/modules/homepage/feature-blocks/empty-raw';
import Title from '@/components/modules/homepage/feature-blocks/title';
import {
  DoubleCard,
  SingleCard,
} from '@/components/modules/homepage/feature-blocks/cards';
import Icons from '@/components/modules/homepage/feature-blocks/icons';
import WithButton from '@/components/modules/homepage/feature-blocks/with-button';
import { FifthIllustration, FirstIllustration, FourthIllustration, SecondIllustration, SeventhIllustration, SixthIllustration, ThirdIllustration } from '@/components/illustrations';

export default function Features() {
  return (
    <section id="features" className="border-grid border-t w-screen">
      <EmptyRaw />
      <Title
        title={
          <>
            <span className="brand-gradient">Meet</span> feely
          </>
        }
        description="A nice spot for your users to give you feedbacks and co-create your projects."
      />
      <SingleCard
        title="Designed for your users"
        description="They’ll feel comfortable expressing their thoughts."
        illustration={<FirstIllustration />}
      />
      <Icons
        items={[
          {
            icon: <Gem className="stroke-amber-500" />,
            title: 'Get your treasure.',
            description: 'Collect user feedbacks.',
          },
          {
            icon: <ListOrdered />,
            title: 'Make order.',
            description: 'Prioritize their ideas.',
          },
          {
            icon: <Trophy />,
            title: 'The best wins.',
            description:
              'Users vote each idea so you’ll know what to improve. ',
          },
        ]}
      />
      <EmptyRaw />
      <Title
        title={
          <>
            Get bigger <span className="brand-gradient">together</span>
          </>
        }
        description="Improve your project thanks to and with your users: grow up sharing everything. "
      />
      <DoubleCard
        firstTitle="Enlight the road"
        firstDescription="Share your roadmap, so every step is visible."
        firstIllustration={<SecondIllustration />}
        secondTitle="Share the updates "
        secondDescription="Notifications will help for each release."
        secondIllustration={<ThirdIllustration />}
      />
      <EmptyRaw />
      <Title
        title={
          <>
            <span className="brand-gradient">Gratitude</span> spins the world
          </>
        }
        description="A loud kiss on the forehead and some rewards are good for your people."
      />
      <SingleCard
        title="Users gain points"
        description="Everytime their ideas get voted, they got points."
        illustration={<FourthIllustration />}
      />
      <DoubleCard
        firstTitle="Badges for great goals"
        firstDescription="Stimulate people to be an active part of the community and give them bagdes. "
        firstIllustration={<FifthIllustration />}
        secondTitle="Spread happiness"
        secondDescription="Give your users rewards to show your gratitude."
        secondIllustration={<SixthIllustration />}
      />
      <EmptyRaw />
      <Title
        title={
          <>
            Feely puts itself{' '}
            <span className="brand-gradient">in your shoes</span>
          </>
        }
        description="Make it a tool that represents your brand. Easy peasy."
      />
      <SingleCard
        title="Explore the theming"
        description="Feely can get dressed as you like."
        illustration={<SeventhIllustration />}
      />
      <Icons
        items={[
          {
            icon: <Heart />,
            title: 'Embed feely.',
            description: 'You can do it wherever you feel like.',
          },
          {
            icon: <Globe />,
            title: 'Connect a custom domain.',
            description: 'You can easily host feely on your own (sub)domain.',
          },
          {
            icon: <Users />,
            title: 'Feely loves team play.',
            description: 'You can make it a perfect collaborative platform.',
          },
        ]}
      />
      <EmptyRaw />
      <Title
        title={
          <>
            Feely is <span className="brand-gradient">not shy</span>
          </>
        }
        description="It gets along with your workflow and your tools. Here are the main integrations."
      />
      <Icons
        items={[
          {
            icon: (
              <Image
                width={40}
                height={40}
                alt="Notion logo"
                src="/assets/notion.png"
              />
            ),
            title: 'Notion.',
            description:
              'Export each feedback to automatically create a new task.',
          },
          {
            icon: (
              <Image
                width={584}
                height={454}
                alt="Notion logo"
                src="/assets/slack.png"
                className="bg-inverse rounded overflow-hidden object-cover size-6"
              />
            ),
            title: 'Slack.',
            description: 'Get notifications every time an idea gets voted.',
          },
          {
            icon: <PlusCircle />,
            title: 'More.',
            description: 'Feely is always at work to release new ones.',
          },
        ]}
      />
      <EmptyRaw />
      <WithButton
        title={
          <>
            Proudly <span className="brand-gradient">open source</span>
          </>
        }
        description="Feely is not greedy, and neither of us is: we keep this tool entirely open source. "
        button={
          <Button asChild variant="secondary" className="w-full sm:w-fit">
            <Link
              href="https://github.com/feelyso/feely"
              className="flex items-center gap-2"
            >
              <GithubIcon />
              Github
            </Link>
          </Button>
        }
      />
      <EmptyRaw />
    </section>
  );
}
