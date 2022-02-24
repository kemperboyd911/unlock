import { UnlockTextIcon } from '../../icons'
import { Link } from '../../helpers/Link'
import { EmailSubscriptionForm } from '../../forms/EmailSubscription'
import {
  EMAIL_SUBSCRIPTION_FORM,
  UNLOCK_LINKS,
} from '../../../config/constants'
import { SOCIAL_URL } from '../../../config/seo'
import { unlockConfig } from '../../../config/unlock'
type LinkType = Record<'name' | 'href', string>

const FOOTER_BOTTOM_NAVIGATION: Record<string, LinkType[]> = {
  App: [
    {
      name: 'Creator Dashboard',
      href: unlockConfig.appURL!,
    },
    {
      name: 'Memberships',
      href: '/memberships',
    },
  ],
  Community: [
    {
      name: 'Discord',
      href: SOCIAL_URL.discord,
    },
    {
      name: 'Forum',
      href: SOCIAL_URL.discourse,
    },
    {
      name: 'Goverance',
      href: SOCIAL_URL.snapshot,
    },
    {
      name: 'Github',
      href: SOCIAL_URL.github,
    },
    {
      name: 'Twitter',
      href: SOCIAL_URL.twitter,
    },
  ],
  Navigation: [
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Integrations',
      href: '/integrations',
    },
    {
      name: 'Developers',
      href: '/developers',
    },
    {
      name: 'Docs',
      href: UNLOCK_LINKS.docs,
    },
  ],
}

export function Footer() {
  return (
    <footer className="w-full text-white bg-brand-dark">
      <div className="grid max-w-screen-lg gap-12 px-4 py-12 sm:mx-auto">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-sm space-y-2">
            <h4 className="text-3xl font-semibold"> Sign up for Updates </h4>
            <p>
              We&apos;ll send you fresh news about our platform, including new
              features and opportunities for the community.
            </p>
          </div>
          <div>
            <EmailSubscriptionForm
              portalId={EMAIL_SUBSCRIPTION_FORM.portalId}
              formGuid={EMAIL_SUBSCRIPTION_FORM.formGuid}
            />
          </div>
        </div>
        <div className="flex sm:justify-between">
          <div className="hidden sm:block">
            <Link href="/" aria-label="Unlock">
              <UnlockTextIcon className="not-sr-only fill-white" />
            </Link>
          </div>
          <div className="grid gap-12 sm:grid-cols-3">
            {Object.entries(FOOTER_BOTTOM_NAVIGATION).map(([title, items]) => (
              <div className="flex flex-col items-baseline gap-4" key={title}>
                <h5 className="font-bold"> {title}</h5>
                <nav className="grid gap-2">
                  {items.map(({ name, href }, index) => (
                    <Link href={href} key={index}>
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer