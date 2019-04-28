/*
  set readonly property
*/

function readonly(target, key, descriptor) {
	descriptor.writable = false;
	return descriptor;
}

// exports
export { readonly };
