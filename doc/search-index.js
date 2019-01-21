var N = null;var searchIndex = {};
searchIndex["interact"]={"doc":"Interact","items":[[3,"Token","interact","Represents a single meaningful substring part in an Interact string expression.",N,N],[12,"kind","","Token kind",0,N],[12,"text","","Token text",0,N],[12,"space_diff","","Amount of whitespace from the previous token",0,N],[3,"TokenVec","","Wrapper for the traversal of a borrowed list of tokens.",N,N],[3,"Reflector","","`Reflector` operates on types implementing `Access`. Some of its methods are behind called automatically from `#[derive(Interact)] impls. It provides a thread-safe context, because on the extreme case, where it is possible that reflection is done via indirection using multiple process threads (see`ReflectIndirect`).",N,N],[3,"ImmutAccess","","ImmutAccess adds function call information over `Reflect`.",N,N],[12,"reflect","","",1,N],[12,"functions","","",1,N],[3,"MutAccess","","MutAccess adds function call information over `ReflectMut`.",N,N],[12,"reflect","","",2,N],[12,"functions","","",2,N],[3,"Assist","","Given a list of items, this provides assistance for completing them.",N,N],[3,"NodeTree","","NodeTree represent a reflection of an Interact type that implemented the `Access` trait. It may be a partial reflection due to limits and indirections (see `Reflector`).",N,N],[12,"info","","",3,N],[12,"meta","","",3,N],[12,"size","","",3,N],[3,"Climber","","Climber represents the full state of evaluation of Interact expressions.  It is used within the impls of the `Access` trait, and most likely does not require direct references from `Interact` users, unless manually providing impls of `Accees` not via the `#[derive(Interact)]`.",N,N],[3,"Root","","A temporary binder of `RootSend` and `RootLocal` dictionaries, used for providing a unified dictionary to the user.",N,N],[12,"send","","",4,N],[12,"local","","",4,N],[3,"RootLocal","","Holds a root dictionary of trait objects that implement `Access` and are therefore Interact-able. These are most likely objects that are held locally behind an `Rc`.",N,N],[12,"owned","","",5,N],[3,"RootSend","","Holds a root dictionary of `Send`-able trait objects that implement `Access` and are therefor Interact-able. These are most likely objects that are held globally behind an `Arc`.",N,N],[12,"owned","","",6,N],[4,"TokenKind","","",N,N],[13,"Ident","","",7,N],[13,"NonNegativeDecimal","","",7,N],[13,"Decimal","","",7,N],[13,"SubscriptOpen","","",7,N],[13,"SubscriptClose","","",7,N],[13,"TupleOpen","","",7,N],[13,"TupleClose","","",7,N],[13,"CurlyOpen","","",7,N],[13,"CurlyClose","","",7,N],[13,"FieldAccess","","",7,N],[13,"Assign","","",7,N],[13,"Colon","","",7,N],[13,"Asterix","","",7,N],[13,"Char","","",7,N],[13,"String","","",7,N],[13,"Range","","",7,N],[13,"Comma","","",7,N],[13,"InvalidToken","","",7,N],[4,"AssignError","","",N,N],[13,"Deser","","",8,N],[13,"Unbuildable","","Some types, having ignored fields, will be unbuildable.",8,N],[13,"Immutable","","Other values are immutable, such as reference values.",8,N],[4,"CallError","","",N,N],[13,"Deser","","",9,N],[13,"NeedMutable","","Signals the Climber stack to retract into a mutable path so that the field we are attempting to operate on will be recalled in a mutable state.",9,N],[13,"NoSuchFunction","","The called function does not exist.",9,N],[4,"Reflect","","An arbitrar between the two possible way to climb into an immutable value.",N,N],[13,"Indirect","","",10,N],[13,"Direct","","",10,N],[4,"ReflectMut","","An arbitrar between the two possible way to climb into a mutable value.",N,N],[13,"Indirect","","",11,N],[13,"Direct","","",11,N],[13,"Immutable","","Internally signals that the value is not really mutable, for example we cannot change a reference value field from Interact context.",11,N],[4,"NextOptions","","",N,N],[13,"NoOptions","","",12,N],[13,"Avail","","",12,N],[4,"NodeInfo","","",N,N],[13,"Grouped","","",13,N],[13,"Delimited","","",13,N],[13,"Named","","",13,N],[13,"Tuple","","",13,N],[13,"Leaf","","",13,N],[13,"Hole","","",13,N],[13,"BorrowedMut","","",13,N],[13,"Locked","","",13,N],[13,"Repeated","","",13,N],[13,"Limited","","",13,N],[4,"ClimbError","","",N,N],[13,"AssignError","","",14,N],[13,"Borrowed","","",14,N],[13,"BorrowedMut","","",14,N],[13,"CallError","","",14,N],[13,"DeserError","","",14,N],[13,"Indirect","","",14,N],[13,"Locked","","",14,N],[13,"MissingStartComponent","","",14,N],[13,"NeedMutPath","","",14,N],[13,"NotFound","","",14,N],[13,"NullPath","","",14,N],[13,"UnattainedMutability","","",14,N],[13,"UnexpectedExpressionEnd","","",14,N],[13,"UnexpectedToken","","",14,N],[5,"deser_assign","","A helper for the specific implementations of `Access` to use with `mut_assign` methods",N,[[["t"],["tracker"],["bool"]],["result",["assignerror"]]]],[11,"new_owned","","",0,[[["string"]],["self"]]],[11,"new_borrowed","","",0,[[["tokenkind"],["str"]],["self"]]],[11,"clone_owned","","",0,[[["self"]],["token"]]],[11,"similar","","Returns whether two tokens are idential with whitespace removed.",0,[[["self"],["token"]],["bool"]]],[11,"is_prefix_of","","Returns whether one token is a prefix or another.",0,[[["self"],["token"]],["bool"]]],[11,"space_suffix","","Return the amount of space following the text of the token.",0,[[["self"]],["usize"]]],[11,"new","","",15,N],[11,"clone_owned","","",15,[[["self"]],["tokenvec"]]],[11,"take_pos","","",15,[[["self"],["usize"]]]],[11,"pos","","",15,[[["self"]],["usize"]]],[11,"new_empty","","",15,[[],["self"]]],[11,"remaining","","",15,[[["self"]],["usize"]]],[11,"has_remaining","","",15,[[["self"]],["bool"]]],[11,"is_empty","","",15,[[["self"]],["bool"]]],[11,"top","","",15,[[["self"]],["token"]]],[11,"top_kind","","",15,[[["self"]],["tokenkind"]]],[11,"len","","",15,[[["self"]],["usize"]]],[11,"advance","","",15,[[["self"],["usize"]]]],[11,"step","","",15,[[["self"]]]],[0,"deser","","",N,N],[3,"Tracker","interact::deser","",N,N],[4,"DeserError","","",N,N],[13,"EndOfTokenList","","",16,N],[13,"NumberTooLarge","","",16,N],[13,"NumberTooSmall","","",16,N],[13,"UnexpectedToken","","",16,N],[13,"Unbuildable","","",16,N],[6,"Result","","",N,N],[8,"Deser","","",N,N],[11,"deser","","",17,[[["tracker"]],["result"]]],[11,"new","","",18,[[["expecttree"],["tokenvec"]],["self"]]],[11,"possible_token","","",18,[[["self"],["token"]]]],[11,"try_token","","",18,[[["self"],["token"]],["result",["bool"]]]],[11,"has_remaining","","",18,[[["self"]],["bool"]]],[11,"top","","",18,[[["self"]],["token"]]],[11,"top_kind","","",18,[[["self"]],["tokenkind"]]],[11,"step","","",18,[[["self"]]]],[11,"new","interact","",19,[[["usize"]],["arc"]]],[11,"reflect_struct","","",19,[[["arc"],["struct"],["reflectstruct"],["bool"]],["nodetree"]]],[11,"reflect_map","","",19,[[["arc"],["reflectiter"],["str"]],["nodetree"]]],[11,"reflect_set","","",19,[[["arc"],["reflectiter"],["str"]],["nodetree"]]],[11,"reflect_vec","","",19,[[["arc"],["reflectvec"],["str"]],["nodetree"]]],[11,"seen_ptr","","",19,N],[11,"reflect","","",19,[[["arc"],["access"]],["nodetree"]]],[0,"access","","",N,N],[3,"Function","interact::access","",N,N],[12,"name","","",20,N],[12,"args","","",20,N],[3,"MutAccess","","MutAccess adds function call information over `ReflectMut`.",N,N],[12,"reflect","","",2,N],[12,"functions","","",2,N],[3,"ImmutAccess","","ImmutAccess adds function call information over `Reflect`.",N,N],[12,"reflect","","",1,N],[12,"functions","","",1,N],[4,"Reflect","","An arbitrar between the two possible way to climb into an immutable value.",N,N],[13,"Indirect","","",10,N],[13,"Direct","","",10,N],[4,"ReflectMut","","An arbitrar between the two possible way to climb into a mutable value.",N,N],[13,"Indirect","","",11,N],[13,"Direct","","",11,N],[13,"Immutable","","Internally signals that the value is not really mutable, for example we cannot change a reference value field from Interact context.",11,N],[4,"AssignError","","",N,N],[13,"Deser","","",8,N],[13,"Unbuildable","","Some types, having ignored fields, will be unbuildable.",8,N],[13,"Immutable","","Other values are immutable, such as reference values.",8,N],[4,"CallError","","",N,N],[13,"Deser","","",9,N],[13,"NeedMutable","","Signals the Climber stack to retract into a mutable path so that the field we are attempting to operate on will be recalled in a mutable state.",9,N],[13,"NoSuchFunction","","The called function does not exist.",9,N],[5,"deser_assign","","A helper for the specific implementations of `Access` to use with `mut_assign` methods",N,[[["t"],["tracker"],["bool"]],["result",["assignerror"]]]],[0,"derive","","",N,N],[3,"Struct","interact::access::derive","",N,N],[12,"name","","",21,N],[12,"kind","","",21,N],[3,"Enum","","",N,N],[12,"name","","",22,N],[12,"opts","","",22,N],[4,"StructKind","","",N,N],[13,"Unit","","",23,N],[13,"Tuple","","",23,N],[13,"Fields","","",23,N],[8,"ReflectStruct","","",N,N],[10,"get_desc","","",24,[[["self"]],["struct"]]],[10,"get_field_by_name","","",24,[[["self"],["str"]],["option",["access"]]]],[10,"get_field_by_idx","","",24,[[["self"],["usize"]],["option",["access"]]]],[10,"get_field_by_name_mut","","",24,[[["self"],["str"]],["option",["access"]]]],[10,"get_field_by_idx_mut","","",24,[[["self"],["usize"]],["option",["access"]]]],[8,"ReflectEnum","","",N,N],[10,"get_variant_desc","","",25,[[["self"]],["enum"]]],[10,"get_variant_struct","","",25,[[["self"]],["reflectstruct"]]],[10,"get_variant_struct_mut","","",25,[[["self"]],["reflectstruct"]]],[0,"iter","interact::access","",N,N],[8,"ReflectIter","interact::access::iter","",N,N],[10,"reflect_next","","",26,[[["self"]],["option"]]],[0,"vec","interact::access","",N,N],[8,"ReflectVec","interact::access::vec","",N,N],[10,"get_len","","",27,[[["self"]],["usize"]]],[10,"get_item","","",27,[[["self"],["usize"]],["option",["access"]]]],[10,"get_item_mut","","",27,[[["self"],["usize"]],["option",["access"]]]],[6,"RetValCallback","interact::access","",N,N],[8,"ReflectIndirect","","The indirect Reflect allows indirect climber or reflector access, and meant to be used as a trait object for that purpose.",N,N],[10,"indirect","","Provides indirection for immutable access.",28,[[["self"],["box",["fnmut"]]]]],[10,"indirect_mut","","Provides indirection for mutable access.",28,[[["self"],["box",["fnmut"]]]]],[8,"ReflectDirect","","The direct Reflect allows direct climber or reflector access, and meant to be used as a trait object for that purpose.",N,N],[10,"immut_reflector","","The specific implementation of the following method will mostly likely call Reflector::reflect with the specific type.",29,[[["self"],["arc"]],["nodetree"]]],[10,"immut_climber","","Implement climbing for the specific type. Returns a reflection of the inner value, depending on the expression remaining to parse.",29,[[["self"],["climber"]],["result",["option","climberror"]]]],[10,"mut_climber","","Implement mutable climbing for the specific type, allowing to modifying it. Returns a reflection of the inner value, depending on the expression remaining to parse.",29,[[["self"],["climber"]],["result",["option","climberror"]]]],[8,"Access","","The `Access` trait, meant to be used as a trait objects provides methods that dynamically expose read&write access to the underlying objects.",N,N],[10,"immut_access","","Expose an immmutable accessor, used when `Access` is immutable or mutable.",30,[[["self"]],["immutaccess"]]],[10,"mut_access","","Expose a mutable accessor, used when `Access` is mutable.",30,[[["self"]],["mutaccess"]]],[11,"immut_call","","Perform an optional method call for a certain function, with the return value provided to the callback. The arguments are parsed from the Token tracker in the Climber parameter.",30,[[["self"],["str"],["climber"],["retvalcallback"]],["result",["callerror"]]]],[11,"mut_call","","Perform an optional method call for a certain function which may modify the underlying value, with the return value provided to the callback. The arguments are parsed from the Token tracker in the Climber parameter.",30,[[["self"],["str"],["climber"],["retvalcallback"]],["result",["callerror"]]]],[11,"mut_assign","","Assign a new value to this object. `probe_only` determines whether the implementation would only parse the new value and not actually assign it. This is in order to provide user feedback for the parsing bits.",30,[[["self"],["tracker"],["bool"]],["result",["assignerror"]]]],[11,"no_funcs","","",2,[[["reflectmut"]],["self"]]],[11,"no_funcs","","",1,[[["reflect"]],["self"]]],[11,"into_position","interact","",12,N],[11,"pend","","",31,[[["self"],["usize"]]]],[11,"pend_one","","",31,[[["self"]]]],[11,"pending","","",31,[[["self"]],["usize"]]],[11,"has_pending","","",31,[[["self"]],["bool"]]],[11,"commit_pending","","",31,[[["self"]]]],[11,"next_options","","",31,[[["self"],["nextoptions"]],["self"]]],[11,"set_next_options","","",31,[[["self"],["nextoptions"]]]],[11,"set_pending_special","","",31,[[["self"],["usize"]]]],[11,"with_valid","","",31,[[["self"],["usize"]],["self"]]],[11,"dismantle","","",31,N],[11,"new","","",3,[[["nodeinfo"],["option",["wrap"]]],["self"]]],[11,"into_node","","",13,[[["self"]],["nodetree"]]],[11,"with_meta","","",13,[[["self"],["arc",["atomicusize"]]],["nodetree"]]],[11,"named","","",13,[[["str"],["nodetree"]],["self"]]],[11,"format","","",13,[[["self"]],["result",["vec","error"]]]],[11,"resolve","","",3,[[["self"]],["usize"]]],[0,"climber","","",N,N],[3,"Climber","interact::climber","Climber represents the full state of evaluation of Interact expressions.  It is used within the impls of the `Access` trait, and most likely does not require direct references from `Interact` users, unless manually providing impls of `Accees` not via the `#[derive(Interact)]`.",N,N],[4,"ClimbError","","",N,N],[13,"AssignError","","",14,N],[13,"Borrowed","","",14,N],[13,"BorrowedMut","","",14,N],[13,"CallError","","",14,N],[13,"DeserError","","",14,N],[13,"Indirect","","",14,N],[13,"Locked","","",14,N],[13,"MissingStartComponent","","",14,N],[13,"NeedMutPath","","",14,N],[13,"NotFound","","",14,N],[13,"NullPath","","",14,N],[13,"UnattainedMutability","","",14,N],[13,"UnexpectedExpressionEnd","","",14,N],[13,"UnexpectedToken","","",14,N],[11,"new","","",32,N],[11,"general_access_immut","","",32,[[["self"],["access"]],["result",["nodetree","climberror"]]]],[11,"general_access_mut","","",32,[[["self"],["access"]],["result",["nodetree","climberror"]]]],[11,"check_field_access_immut","","",32,[[["self"],["enumorstruct"]],["result",["option","climberror"]]]],[11,"check_field_access_mut","","",32,[[["self"],["enumorstructmut"]],["result",["option","climberror"]]]],[11,"mutex_handling","","",32,[[["self"],["mutex"]],["result",["nodetree","climberror"]]]],[11,"refcell_handling","","",32,[[["self"],["refcell"]],["result",["nodetree","climberror"]]]],[11,"open_bracket","","",32,[[["self"]],["bool"]]],[11,"close_bracket","","",32,[[["self"]],["result",["climberror"]]]],[11,"is_probe_only","","",32,[[["self"]],["bool"]]],[11,"convert_to_assist","","",32,N],[11,"borrow_tracker","","",32,[[["self"]],["tracker"]]],[0,"root","interact","",N,N],[3,"RootSend","interact::root","Holds a root dictionary of `Send`-able trait objects that implement `Access` and are therefor Interact-able. These are most likely objects that are held globally behind an `Arc`.",N,N],[12,"owned","","",6,N],[3,"RootLocal","","Holds a root dictionary of trait objects that implement `Access` and are therefore Interact-able. These are most likely objects that are held locally behind an `Rc`.",N,N],[12,"owned","","",5,N],[3,"Root","","A temporary binder of `RootSend` and `RootLocal` dictionaries, used for providing a unified dictionary to the user.",N,N],[12,"send","","",4,N],[12,"local","","",4,N],[11,"new","","",6,[[],["self"]]],[11,"as_root","","",6,[[["self"]],["root"]]],[11,"new","","",5,[[],["self"]]],[11,"probe","","Probe a path, checking if it is valid. If it contains a function name, it will not be called. If it contains an assignment, the assignment will not take place but the parameters value will check for `Deser` deserialization.",4,N],[11,"access","","Perform evaluation of the provided path. This may perform assignments, or call user-defined functions via the `#[interact(...)]` type attribute.",4,N],[11,"keys","","",4,[[["self"]],["vec",["str"]]]],[6,"RetValCallback","interact","",N,N],[8,"Deser","","",N,N],[11,"deser","","",17,[[["tracker"]],["result"]]],[8,"Access","","The `Access` trait, meant to be used as a trait objects provides methods that dynamically expose read&write access to the underlying objects.",N,N],[10,"immut_access","","Expose an immmutable accessor, used when `Access` is immutable or mutable.",30,[[["self"]],["immutaccess"]]],[10,"mut_access","","Expose a mutable accessor, used when `Access` is mutable.",30,[[["self"]],["mutaccess"]]],[11,"immut_call","","Perform an optional method call for a certain function, with the return value provided to the callback. The arguments are parsed from the Token tracker in the Climber parameter.",30,[[["self"],["str"],["climber"],["retvalcallback"]],["result",["callerror"]]]],[11,"mut_call","","Perform an optional method call for a certain function which may modify the underlying value, with the return value provided to the callback. The arguments are parsed from the Token tracker in the Climber parameter.",30,[[["self"],["str"],["climber"],["retvalcallback"]],["result",["callerror"]]]],[11,"mut_assign","","Assign a new value to this object. `probe_only` determines whether the implementation would only parse the new value and not actually assign it. This is in order to provide user feedback for the parsing bits.",30,[[["self"],["tracker"],["bool"]],["result",["assignerror"]]]],[8,"ReflectDirect","","The direct Reflect allows direct climber or reflector access, and meant to be used as a trait object for that purpose.",N,N],[10,"immut_reflector","","The specific implementation of the following method will mostly likely call Reflector::reflect with the specific type.",29,[[["self"],["arc"]],["nodetree"]]],[10,"immut_climber","","Implement climbing for the specific type. Returns a reflection of the inner value, depending on the expression remaining to parse.",29,[[["self"],["climber"]],["result",["option","climberror"]]]],[10,"mut_climber","","Implement mutable climbing for the specific type, allowing to modifying it. Returns a reflection of the inner value, depending on the expression remaining to parse.",29,[[["self"],["climber"]],["result",["option","climberror"]]]],[8,"ReflectIndirect","","The indirect Reflect allows indirect climber or reflector access, and meant to be used as a trait object for that purpose.",N,N],[10,"indirect","","Provides indirection for immutable access.",28,[[["self"],["box",["fnmut"]]]]],[10,"indirect_mut","","Provides indirection for mutable access.",28,[[["self"],["box",["fnmut"]]]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"to_owned","","",15,[[["self"]],["t"]]],[11,"clone_into","","",15,N],[11,"from","","",15,[[["t"]],["t"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"into","","",19,[[["self"]],["u"]]],[11,"from","","",19,[[["t"]],["t"]]],[11,"try_from","","",19,[[["u"]],["result"]]],[11,"borrow","","",19,[[["self"]],["t"]]],[11,"get_type_id","","",19,[[["self"]],["typeid"]]],[11,"try_into","","",19,[[["self"]],["result"]]],[11,"borrow_mut","","",19,[[["self"]],["t"]]],[11,"into","interact::access","",1,[[["self"]],["u"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"into","interact","",31,[[["self"]],["u"]]],[11,"to_owned","","",31,[[["self"]],["t"]]],[11,"clone_into","","",31,N],[11,"from","","",31,[[["t"]],["t"]]],[11,"try_from","","",31,[[["u"]],["result"]]],[11,"borrow","","",31,[[["self"]],["t"]]],[11,"get_type_id","","",31,[[["self"]],["typeid"]]],[11,"try_into","","",31,[[["self"]],["result"]]],[11,"borrow_mut","","",31,[[["self"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"into","interact::climber","",32,[[["self"]],["u"]]],[11,"to_owned","","",32,[[["self"]],["t"]]],[11,"clone_into","","",32,N],[11,"from","","",32,[[["t"]],["t"]]],[11,"try_from","","",32,[[["u"]],["result"]]],[11,"borrow","","",32,[[["self"]],["t"]]],[11,"get_type_id","","",32,[[["self"]],["typeid"]]],[11,"try_into","","",32,[[["self"]],["result"]]],[11,"borrow_mut","","",32,[[["self"]],["t"]]],[11,"into","interact::root","",4,[[["self"]],["u"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"into","interact","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"into","interact::access","",8,[[["self"]],["u"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"into","interact","",12,[[["self"]],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"to_string","","",13,[[["self"]],["string"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"into","interact::climber","",14,[[["self"]],["u"]]],[11,"from","","",14,[[["t"]],["t"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"into","interact::deser","",18,[[["self"]],["u"]]],[11,"from","","",18,[[["t"]],["t"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"get_type_id","","",18,[[["self"]],["typeid"]]],[11,"try_into","","",18,[[["self"]],["result"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"into","interact::access","",20,[[["self"]],["u"]]],[11,"from","","",20,[[["t"]],["t"]]],[11,"try_from","","",20,[[["u"]],["result"]]],[11,"borrow","","",20,[[["self"]],["t"]]],[11,"get_type_id","","",20,[[["self"]],["typeid"]]],[11,"try_into","","",20,[[["self"]],["result"]]],[11,"borrow_mut","","",20,[[["self"]],["t"]]],[11,"into","interact::access::derive","",21,[[["self"]],["u"]]],[11,"from","","",21,[[["t"]],["t"]]],[11,"try_from","","",21,[[["u"]],["result"]]],[11,"borrow","","",21,[[["self"]],["t"]]],[11,"get_type_id","","",21,[[["self"]],["typeid"]]],[11,"try_into","","",21,[[["self"]],["result"]]],[11,"borrow_mut","","",21,[[["self"]],["t"]]],[11,"into","","",22,[[["self"]],["u"]]],[11,"from","","",22,[[["t"]],["t"]]],[11,"try_from","","",22,[[["u"]],["result"]]],[11,"borrow","","",22,[[["self"]],["t"]]],[11,"get_type_id","","",22,[[["self"]],["typeid"]]],[11,"try_into","","",22,[[["self"]],["result"]]],[11,"borrow_mut","","",22,[[["self"]],["t"]]],[11,"into","","",23,[[["self"]],["u"]]],[11,"from","","",23,[[["t"]],["t"]]],[11,"try_from","","",23,[[["u"]],["result"]]],[11,"borrow","","",23,[[["self"]],["t"]]],[11,"get_type_id","","",23,[[["self"]],["typeid"]]],[11,"try_into","","",23,[[["self"]],["result"]]],[11,"borrow_mut","","",23,[[["self"]],["t"]]],[11,"default","interact","",31,[[],["assist"]]],[11,"default","","",12,[[],["self"]]],[11,"default","interact::root","",6,[[],["rootsend"]]],[11,"default","","",5,[[],["rootlocal"]]],[11,"eq","interact","",7,[[["self"],["tokenkind"]],["bool"]]],[11,"ne","","",7,[[["self"],["tokenkind"]],["bool"]]],[11,"eq","","",0,[[["self"],["token"]],["bool"]]],[11,"ne","","",0,[[["self"],["token"]],["bool"]]],[11,"eq","interact::deser","",16,[[["self"],["desererror"]],["bool"]]],[11,"eq","interact::access","",8,[[["self"],["assignerror"]],["bool"]]],[11,"ne","","",8,[[["self"],["assignerror"]],["bool"]]],[11,"eq","","",9,[[["self"],["callerror"]],["bool"]]],[11,"ne","","",9,[[["self"],["callerror"]],["bool"]]],[11,"eq","interact::access::derive","",23,[[["self"],["structkind"]],["bool"]]],[11,"ne","","",23,[[["self"],["structkind"]],["bool"]]],[11,"eq","","",21,[[["self"],["struct"]],["bool"]]],[11,"ne","","",21,[[["self"],["struct"]],["bool"]]],[11,"eq","interact","",31,[[["self"],["assist"]],["bool"]]],[11,"ne","","",31,[[["self"],["assist"]],["bool"]]],[11,"eq","","",12,[[["self"],["nextoptions"]],["bool"]]],[11,"ne","","",12,[[["self"],["nextoptions"]],["bool"]]],[11,"eq","interact::climber","",14,[[["self"],["climberror"]],["bool"]]],[11,"ne","","",14,[[["self"],["climberror"]],["bool"]]],[11,"clone","interact","",7,[[["self"]],["tokenkind"]]],[11,"clone","","",0,[[["self"]],["token"]]],[11,"clone","","",15,[[["self"]],["tokenvec"]]],[11,"clone","","",31,[[["self"]],["assist"]]],[11,"clone","","",12,[[["self"]],["nextoptions"]]],[11,"clone","interact::climber","",32,[[["self"]],["climber"]]],[11,"fmt","interact","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",15,[[["self"],["formatter"]],["result"]]],[11,"fmt","interact::deser","",16,[[["self"],["formatter"]],["result"]]],[11,"fmt","interact::access","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","interact::access::derive","",23,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",21,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",22,[[["self"],["formatter"]],["result"]]],[11,"fmt","interact","",31,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","interact::climber","",14,[[["self"],["formatter"]],["result"]]]],"paths":[[3,"Token"],[3,"ImmutAccess"],[3,"MutAccess"],[3,"NodeTree"],[3,"Root"],[3,"RootLocal"],[3,"RootSend"],[4,"TokenKind"],[4,"AssignError"],[4,"CallError"],[4,"Reflect"],[4,"ReflectMut"],[4,"NextOptions"],[4,"NodeInfo"],[4,"ClimbError"],[3,"TokenVec"],[4,"DeserError"],[8,"Deser"],[3,"Tracker"],[3,"Reflector"],[3,"Function"],[3,"Struct"],[3,"Enum"],[4,"StructKind"],[8,"ReflectStruct"],[8,"ReflectEnum"],[8,"ReflectIter"],[8,"ReflectVec"],[8,"ReflectIndirect"],[8,"ReflectDirect"],[8,"Access"],[3,"Assist"],[3,"Climber"]]};
searchIndex["interact_derive"]={"doc":"","items":[[24,"Interact","interact_derive","Attributes that Interact derive macro supports",N,N],[14,"derive_interact_prelude","","",N,N],[14,"derive_interact_opaque","","",N,N],[14,"derive_interact_extern_opqaue","","",N,N],[14,"derive_interact_basic","","",N,N]],"paths":[]};
searchIndex["interact_prompt"]={"doc":"Interact Prompt","items":[[3,"Settings","interact_prompt","",N,N],[12,"history_file","","",0,N],[12,"initial_command","","",0,N],[4,"Interaction","","",N,N],[13,"Line","","",1,N],[13,"CtrlC","","",1,N],[13,"CtrlD","","",1,N],[13,"Err","","",1,N],[4,"Response","","",N,N],[13,"Continue","","",2,N],[13,"Exit","","",2,N],[4,"PromptError","","",N,N],[13,"ReadLine","","",3,N],[5,"direct","","Use the current thread for an interactive `Interact` prompt.",N,[[["settings"],["h"]],["result",["prompterror"]]]],[5,"spawn","","Spawn `Interact` in a new thread.",N,[[["settings"],["h"]],["joinhandle"]]],[0,"registry","","Interact Prompt registry for accessible state.",N,N],[3,"SendRegistry","interact_prompt::registry","The `Send` Registry manages state roots of the whole process.",N,N],[3,"LocalRegistry","","The Local Registry manages state roots of per-thread states.",N,N],[11,"insert","","Insert new states into the root.",4,[[["str"],["box",["access"]]]]],[11,"insert","","Insert new states into the root.",5,[[["str"],["box",["access"]]]]],[8,"Handler","interact_prompt","This trait defines an optional handler for prompt commands. This allows to override the behavior of the handler for `()`.",N,N],[11,"receive_interaction","","",6,[[["self"],["interaction"]],["response"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"into","interact_prompt::registry","",4,[[["self"]],["u"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"default","interact_prompt","",0,[[],["self"]]],[11,"clone","","",0,[[["self"]],["settings"]]],[11,"clone","","",1,[[["self"]],["interaction"]]],[11,"clone","","",2,[[["self"]],["response"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]]],"paths":[[3,"Settings"],[4,"Interaction"],[4,"Response"],[4,"PromptError"],[3,"SendRegistry"],[3,"LocalRegistry"],[8,"Handler"]]};
initSearch(searchIndex);
