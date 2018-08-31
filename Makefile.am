# Point to our macro directory and pick up user flags from the environment
ACLOCAL_AMFLAGS  = -I m4 ${ACLOCAL_FLAGS}

SUBDIRS = data js subprojects/gvc src  tests po docs

if BUILD_BROWSER_PLUGIN
SUBDIRS += browser-plugin
endif

if ENABLE_MAN
SUBDIRS += man
endif

EXTRA_DIST =		\
	.project	\
	.settings	\
	autogen.sh

# These are files checked into Git that we don't want to distribute
DIST_EXCLUDE =					\
	.gitignore				\
	.gitmodules				\
	gnome-shell.doap			\
	HACKING					\
	MAINTAINERS				\
	tools/build/*

DISTCHECK_CONFIGURE_FLAGS = --enable-gtk-doc --enable-man
