import '@adonisjs/inertia/types'

import type React from 'react'
import type { Prettify } from '@adonisjs/core/types/common'

type ExtractProps<T> =
  T extends React.FC<infer Props>
    ? Prettify<Omit<Props, 'children'>>
    : T extends React.Component<infer Props>
      ? Prettify<Omit<Props, 'children'>>
      : never

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'admin/about': ExtractProps<(typeof import('../../inertia/pages/admin/about.tsx'))['default']>
    'admin/experience': ExtractProps<(typeof import('../../inertia/pages/admin/experience.tsx'))['default']>
    'admin/form/about_paragraph_modal': ExtractProps<(typeof import('../../inertia/pages/admin/form/about_paragraph_modal.tsx'))['default']>
    'admin/form/experience_form': ExtractProps<(typeof import('../../inertia/pages/admin/form/experience_form.tsx'))['default']>
    'admin/form/project_form': ExtractProps<(typeof import('../../inertia/pages/admin/form/project_form.tsx'))['default']>
    'admin/projects': ExtractProps<(typeof import('../../inertia/pages/admin/projects.tsx'))['default']>
    'admin/user': ExtractProps<(typeof import('../../inertia/pages/admin/user.tsx'))['default']>
    'auth/login': ExtractProps<(typeof import('../../inertia/pages/auth/login.tsx'))['default']>
    'errors/not_found': ExtractProps<(typeof import('../../inertia/pages/errors/not_found.tsx'))['default']>
    'errors/server_error': ExtractProps<(typeof import('../../inertia/pages/errors/server_error.tsx'))['default']>
    'home': ExtractProps<(typeof import('../../inertia/pages/home.tsx'))['default']>
  }
}
