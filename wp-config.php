<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_ wv!(8.]T7?wLG*f:u%kL9Jbo6qTgs2 ;B+&XIt@uQ&J=iK&H~BIHzjJ}`D?*=B');
define('SECURE_AUTH_KEY',  '@>h$TQ)IYJ)MFsl?W}NJQOq0jA*K;dX+?kX[4iD34}{ob6~yHO)L:}i@122|WC%6');
define('LOGGED_IN_KEY',    'YzmKS|dB+N@rnJgnH 5j90?a(V0,|gZ)TUHbTev+;fppFOze8Bjd:H~tA??[{fcV');
define('NONCE_KEY',        ';O(ZwT3.g?@9+B3jg#{y^M*H)A#(N:k0D|2g=L|f|wP6/O*,<iXYB7V9(lw;7?/W');
define('AUTH_SALT',        'n35m%<05E;Fe.~!Fs*q%/+lzpdy.Q$0${8SftvK>*YY)udqd&v`uj=0miuA!v*6~');
define('SECURE_AUTH_SALT', ' LI]D<VUeH^H)Fy(v=/op<KA?H2G-Rnk*Y|/`~RuCsE`$/F!){J{Dh*p`{tORm2w');
define('LOGGED_IN_SALT',   'J/!.L;wKg{PKaNGD,+qW(e(:nk]e[Mgyh5f$_+u63n^YkP$MRq/SZn1Sj:[{q@t%');
define('NONCE_SALT',       '19RYue#54@jQ|yd20m&_jc^+2.Q_Bd0{XSnX-,8tyyEwq&ttXg1LhzK+6]6?^S!r');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
