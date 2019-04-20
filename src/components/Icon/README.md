# Icon component

## Use

```
import Icon from 'components/Icon'

// min use
<Icon name="user" />
// options
<Icon size="20" />
<Icon primary />
<Icon secondary />
```

## Dev

Make sure the root svg tag has `xmlns='http://www.w3.org/2000/svg'` and that the attributes are in camelCase instead of kebab-case.
Exemple: replace `view-box` with `viewBox`.

```
<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 20 20">
```

[svg icons](http://svgicons.sparkk.fr)
