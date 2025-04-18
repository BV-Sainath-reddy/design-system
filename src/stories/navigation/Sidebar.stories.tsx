import React, { useState } from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { HomeIcon, DocumentIcon, ChartBarIcon, CogIcon, UsersIcon } from '@heroicons/react/24/outline';
import { StoryFn, Meta } from '@storybook/react';

// Define proper types for Storybook
interface StorybookNavItem {
  id: string;
  label: string;
  icon: React.ReactElement;
  href?: string;
  items?: StorybookNavItem[];
}

interface StoryArgs {
  items: StorybookNavItem[];
  collapsed?: boolean;
  logo?: React.ReactNode;
}

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Collapsible sidebar navigation component with support for nested menus',
      },
    },
  },
} as Meta<typeof Sidebar>;

// Convert Heroicons to proper React elements
const navItems: StorybookNavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <HomeIcon className="w-5 h-5" />,
    href: '#',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <DocumentIcon className="w-5 h-5" />,
    items: [
      { id: 'current', label: 'Current Projects', href: '#', icon: <DocumentIcon className="w-5 h-5" /> },
      { id: 'archived', label: 'Archived Projects', href: '#', icon: <DocumentIcon className="w-5 h-5" /> },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: <ChartBarIcon className="w-5 h-5" />,
    items: [
      { id: 'monthly', label: 'Monthly', href: '#', icon: <ChartBarIcon className="w-5 h-5" /> },
      { id: 'annual', label: 'Annual', href: '#', icon: <ChartBarIcon className="w-5 h-5" /> },
    ],
  },
  {
    id: 'team',
    label: 'Team',
    icon: <UsersIcon className="w-5 h-5" />,
    href: '#',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <CogIcon className="w-5 h-5" />,
    href: '#',
  },
];

const Template: StoryFn<typeof Sidebar> = (args) => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className="flex h-screen">
      <Sidebar 
        {...args} 
        collapsed={collapsed} 
        onToggleCollapse={() => setCollapsed(!collapsed)} 
      />
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>Toggle the sidebar using the button at the bottom.</p>
      </main>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: navItems,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: navItems,
  collapsed: true,
};

export const WithCustomLogo = Template.bind({});
WithCustomLogo.args = {
  items: navItems,
  logo: (
    <div className="font-bold text-primary-600 text-xl">
      Design System
    </div>
  ),
};
