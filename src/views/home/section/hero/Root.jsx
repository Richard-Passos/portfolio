import { ScrollIndicator, Section } from '@/components';
import { Button, DropdownMenu, Text } from '@/components/ui';
import { cn } from '@/utils';

import Title from './Title';

const HomeSectionHero = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col justify-between p-24', className)}
      theme='light'
      {...props}
    >
      <Title />

      <div className='relative flex w-full'>
        <Text className='max-w-lg text-lg'>
          Hi there! I&apos;m Richard, an awesome{' '}
          <strong>full-stack developer</strong> who cares building solid and
          scalable products with a great user experience.
        </Text>

        <ScrollIndicator className='-bottom-24 right-0' />
      </div>
    </Section>
  );
};

const Drop = () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant='outline'>Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className='w-56'>
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>Profile</span>
            <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <span>Billing</span>
            <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <span>Settings</span>
            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <span>Keyboard shortcuts</span>
            <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>Team</span>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.Sub.Trigger>
              <span>Invite users</span>
            </DropdownMenu.Sub.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Sub.Content>
                <DropdownMenu.Item>
                  <span>Email</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <span>Message</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <span>More...</span>
                </DropdownMenu.Item>
              </DropdownMenu.Sub.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Item>
            <span>New Team</span>
            <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <span>GitHub</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <span>Support</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item disabled>
          <span>API</span>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <span>Log out</span>
          <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
export default HomeSectionHero;
