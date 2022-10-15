import { forwardRef } from "react";
import { Group, Avatar, UnstyledButton } from '@mantine/core';

export const UserButton = forwardRef(
    ({ image, name, email, icon, ...others }, ref) => (
      <UnstyledButton
        ref={ref}
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.md,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        })}
        {...others}
      >
        <Group>
          <Avatar src={image} radius="xl" />
          {/* {icon || <ChevronRight size={16} />} */}
        </Group>
      </UnstyledButton>
    )
  );
  