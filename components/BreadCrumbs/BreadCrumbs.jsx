import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledBreadCrumbs } from './BreadCrumbs.styled';

const BreadCrumbs = () => {
  const router = useRouter();
  const generateBreadcrumbs = () => {
    const asPathWithoutQuery = router.asPath.split('?')[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0);
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
      const title = subpath;
      return { href, title };
    });
    return [{ href: '/', title: 'home' }, ...crumblist];
  };
  const breadcrumbs = generateBreadcrumbs();
  return (
    <StyledBreadCrumbs>
      {breadcrumbs.map((crumb, idx) => (
        <>
          <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
          {idx !== breadcrumbs.length - 1 ? ' > ' : ''}
        </>
      ))}
    </StyledBreadCrumbs>
  );
};

const Crumb = ({ title, href, last = false }) => {
  if (last) {
    return title;
  }

  return <Link href={href}>{title}</Link>;
};

export default BreadCrumbs;
