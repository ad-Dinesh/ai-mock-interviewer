import React from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10">
        {children}
    </div>
  )
}

export default DashboardLayout