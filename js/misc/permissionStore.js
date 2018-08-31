// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-

const Gio = imports.gi.Gio;

const PermissionStoreIface = '<node> \
  <interface name="org.freedesktop.impl.portal.PermissionStore"> \
    <method name="Lookup"> \
      <arg name="table" type="s" direction="in"/> \
      <arg name="id" type="s" direction="in"/> \
      <arg name="permissions" type="a{sas}" direction="out"/> \
      <arg name="data" type="v" direction="out"/> \
    </method> \
    <method name="Set"> \
      <arg name="table" type="s" direction="in"/> \
      <arg name="create" type="b" direction="in"/> \
      <arg name="id" type="s" direction="in"/> \
      <arg name="app_permissions" type="a{sas}" direction="in"/> \
      <arg name="data" type="v" direction="in"/> \
    </method> \
    <signal name="Changed"> \
      <arg name="table" type="s" direction="out"/> \
      <arg name="id" type="s" direction="out"/> \
      <arg name="deleted" type="b" direction="out"/> \
      <arg name="data" type="v" direction="out"/> \
      <arg name="permissions" type="a{sas}" direction="out"/> \
    </signal> \
  </interface> \
</node>';

const PermissionStoreProxy = Gio.DBusProxy.makeProxyWrapper(PermissionStoreIface);

function PermissionStore(initCallback, cancellable) {
    return new PermissionStoreProxy(Gio.DBus.session,
                                    'org.freedesktop.impl.portal.PermissionStore',
                                    '/org/freedesktop/impl/portal/PermissionStore',
                                    initCallback, cancellable);
};
