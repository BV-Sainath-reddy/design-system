import React, { useState, KeyboardEvent } from 'react';

interface NavItem {
    id: string;
    label: string;
    icon: React.ReactElement; // Changed from React.ReactNode
    href?: string;
    items?: NavItem[];
  }
interface SidebarProps {
  items: NavItem[];
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  logo?: React.ReactNode;
  className?: string;
}


export const Sidebar: React.FC<SidebarProps> = ({
  items,
  collapsed = false,
  onToggleCollapse,
  logo,
  className = '',
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  const handleKeyDown = (e: KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveItem(activeItem === id ? null : id);
    }
  };
  
  const renderItems = (items: NavItem[], level = 0) => {
    return items.map((item) => (
      <li key={item.id} className="mb-1 list-none">
        <div
          className={`flex items-center p-3 rounded-lg hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-colors
            ${activeItem === item.id ? 'bg-primary-50 text-primary-700' : 'text-gray-700'}
            ${level > 0 ? 'pl-8' : ''}
          `}
          onClick={() => item.items && setActiveItem(activeItem === item.id ? null : item.id)}
          onKeyDown={(e) => handleKeyDown(e, item.id)}
          role="button"
          tabIndex={0}
          aria-expanded={item.items ? activeItem === item.id : undefined}
          aria-controls={item.items ? `submenu-${item.id}` : undefined}
        >
          {item.icon && <span className="mr-3" aria-hidden="true">{item.icon}</span>}
          {!collapsed && (
            <>
              <span className="flex-1">{item.label}</span>
              {item.items && (
                <span className="ml-2">
                  {activeItem === item.id ? '−' : '+'}
                </span>
              )}
            </>
          )}
        </div>
        {item.items && activeItem === item.id && !collapsed && (
          <ul 
            id={`submenu-${item.id}`} 
            className="mt-1 pl-0"
            role="menu"
          >
            {renderItems(item.items, level + 1)}
          </ul>
        )}
      </li>
    ));
  };
  
  return (
    <aside
      className={`bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 ${className} ${
        collapsed ? 'w-20' : 'w-64'
      }`}
      aria-label="Sidebar navigation"
    >
      <div className="p-4 border-b border-gray-200">
        {logo || (
          <h1 className={`font-bold ${collapsed ? 'text-center' : ''}`}>
            {collapsed ? 'L' : 'Logo'}
          </h1>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="pl-0" role="menu">
          {renderItems(items)}
        </ul>
      </nav>
      {onToggleCollapse && (
        <button
          onClick={onToggleCollapse}
          className="p-4 border-t border-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '→' : '←'}
        </button>
      )}
    </aside>
  );
};
